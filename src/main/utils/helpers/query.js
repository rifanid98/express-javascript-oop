import connection from "../configs/db/postgresql/connection";

class QueryHelper {

  static OR = "OR";
  static AND = "AND";

  /**
   * Parsing object data menjadi string SQL WHERE
   * 
   * @param {object} where 
   * @param {string} Query.operator
   * @returns {string} ex: field1 = value1 AND field2 = value2
   */
  static parseWhere(where = {}, operator = this.AND, useValue = false, startValue = 1) {
    const whereKeys = Object.keys(where);
    let query = "";
    whereKeys.forEach((item, index) => {
      if (useValue) {
        query += `${item} = ${this.parseString(where[item])} `;
      } else {
        query += `${item} = $${startValue ? startValue : index+1} `;
      }
      query += index != whereKeys.length -1 ? `${operator} ` : "";
      startValue++;
    });
    return query;
  }

  /**
   * Parse nilai variable menjadi string.
   * Apabila nilai yang dimasukkan berupa object
   * atau array, maka akan mengembalikan string
   * typeofnya.
   * 
   * @param {any} value value to parse
   * @returns {string} 
   * ex: 1 to be 1, 
   *     A to be 'A', 
   *     true to be true
   */
  static parseString(value) {
    const whiteList = ["number", "string", "boolean"];
    if (!whiteList.includes(typeof value)) {
      return typeof(value).toString();
    }

    switch (typeof value) {
      case "string":
        return `'${value}'`;
  
      default:
        return value;
    }
  }

  /**
   * Parse fields
   * 
   * @param {object} fields 
   * @returns {string} ex: field1, field2, fieldn
   */
  static parseFields(fields) {
    return Object.keys(fields).join(",");
  }

  /**
   * Parse values
   * 
   * @param {object} data 
   * @returns {string} ex: 1, 'john doe', true
   */
  static parseValues(data) {
    const keys = Object.keys(data);
    let values = [];
    keys.forEach((item, index) => {
      const value = this.parseString(data[item]);
      values.push(value);
    })
    return values.join(",");
  }

  /**
   * Parse statements
   * 
   * @param {object} data 
   * @returns {array} ex: [1, 'john doe', true]
   */
  static parseParams(data) {
    const keys = Object.keys(data);
    let statements = [];
    keys.forEach((item) => {
      statements.push(data[item])
    });
    return statements;
  }

  /**
   * Generate Statements
   * 
   * @param {object} data
   * @returns {string} ex: n data -> $1, $2, $3, $n
   */
  static generateStatements(data) {
    const total = Object.keys(data).length;
    let statements = "";
    for (let i = 1; i <= total; i++) {
      statements += `${i}$`;
      statements += i == total ? "" : ", ";
    }
    return statements;
  }

  /**
   * Parse SET query syntax
   * 
   * @param {object} data
   * @returns {string} 
   * ex: id = 1, name = 'John Doe', married = false <br>
   *     id = $1, name = $2, married = $3
   */
  static parseSet(data, useValue = false) {
    const keys = Object.keys(data);
    let set = "";
    keys.forEach((item, index) => {
      if (useValue) {
        set += `${item} = ${this.parseString(data[item])}`;
      } else {
        set += `${item} = $${index+1}`;
      }
      set += index == keys.length -1 ? "" : ", ";
    });
    return set;
  }
}

/**
 * 
 */
class Query {

  TAIL = "DESC";
  HEAD = "ASC";
  TABLE = null;

  constructor(table) {
    this.TABLE = table;
  }

  /**
   * 
   * @param {{}} {where: {}, fields: {}}
   * @returns {Promise<{}>} MySQL rows execution infromation 
   * @throws {booelan} Return false if no data was found
   */
  select({where = null, fields = null } = {}) {
    return new Promise(async (resolve, reject) => {
      let queryText = "SELECT ";

      queryText += fields
        ? `${QueryHelper.parseFields(fields)} `
        : "*";
      queryText += "FROM ";
      queryText += where 
        ? `${QueryHelper.parseWhere(where)} `
        : "";

      const params = QueryHelper.parseParams(where);

      try {
        const select = await connection.query(queryText, params);
        const {rows} = select;
        if (rows.length < 1) {
          resolve(false);
        }
        resolve(rows);
      } catch (error) {
        reject(error)  ;
      }
    });
  }
  /**
   * Get All data from database
   * 
   * @returns {Promise<Array>>} MySQL rows, when there is no data, it returns an empty array
   * @throws {booelan} Return false if no data found
   */
  async selectAll() {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        SELECT * FROM ${this.TABLE}`;
    
      try {
        const select = await connection.query(queryText);
        const {rows} = select;
        if (rows.length < 1) {
          resolve(false);
        }
        resolve(rows);
      } catch (error) {
        reject(false);
      }
    });
  }

  /**
   * Get one data from database.
   * 
   * @param {string} target target sequencing. default: DESC (descending)
   * @returns {Promise<Array>>} MySQL rows, when there is no data, it returns an empty array
   * @throws {booelan} Return false if no data found
   */
  async selectOne(target = this.TAIL) {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        SELECT    * 
        FROM      ${this.TABLE}
        ORDER BY  id ${target}
        LIMIT 0, 1`;
    
      try {
        const select = await connection.query(queryText);
        const {rows} = select;
        if (rows.length < 1) {
          resolve(false);
        }
        resolve(rows);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * Get All data from database with condition
   * 
   * @param {object} data will be parsed into SQL WHERE syntax
   * @returns {Promise<Array>>} MySQL rows, when there is no data, it returns an empty array
   * @throws {booelan} Return false if no data found
   */
  async selectWhere(data) {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        SELECT  * 
        FROM    ${this.TABLE} 
        WHERE   ${QueryHelper.parseWhere(data, QueryHelper.OR, false)}`;

      const params = QueryHelper.parseParams(data);

      try {
        const select = await connection.query(queryText, params);
        const {rows} = select;
        if (rows.length < 1) {
          resolve(false);
        }
        resolve(rows);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * Get All data from database with condition
   * 
   * @param {object} data will be parsed into SQL WHERE syntax
   * @returns {Promise<Array>>} MySQL rows, when there is no data, it returns an empty array
   * @throws {booelan} Return false if no data found
   */
  async selectWhereOne(where, target = this.TAIL) {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        SELECT    *
        FROM      ${this.TABLE} 
        WHERE     ${QueryHelper.parseWhere(where, QueryHelper.OR)}
        ORDER BY  id ${target}`;
    
      const params = QueryHelper.parseParams(where);

      try {
        const select = await connection.query(queryText, params);
        const {rows} = select;
        if (rows.length < 1) {
          resolve(false);
        } 
        resolve(rows[0]);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Insert one data to database
   * 
   * @param {object} data 
   * @returns {Promise<{}>} MySQL insert execution infromation 
   * @throws {booelan} Return false if no data was inserted
   */
  insertOne(data) {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        INSERT INTO ${this.TABLE} (${QueryHelper.parseFields(data)})
        VALUES(${QueryHelper.parseValues(data)}) `;

      try {
        const insert = await connection.query(queryText);
        const {rowCount} = insert;
        if (rowCount < 1) {
          resolve(false);
        }
        resolve(insert);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Update data
   * 
   * @param {object} data 
   * @param {object} where 
   * @returns {Promise<{}>} MySQL update execution infromation 
   * @throws {booelan} Return false if no data was updated
   */
  update(data, where) {
    return new Promise(async (resolve, reject) => {
      const totalData = Object.keys(data).length;
      const queryText = `
        UPDATE ${this.TABLE} SET ${QueryHelper.parseSet(data)}
        WHERE ${QueryHelper.parseWhere(where, QueryHelper.AND, false, totalData+1)}`;
      
      data = QueryHelper.parseParams(data);
      where = QueryHelper.parseParams(where);
      const params = [...data, ...where];

      try {
        const update = await connection.query(queryText, params);
        const {rowCount} = update;
        if (rowCount < 1) {
          resolve(false);
        }
        resolve(update);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Delete data
   * 
   * @param {object} data 
   * @param {object} where 
   * @returns {Promise<{}>} MySQL delete execution infromation 
   * @throws {booelan} Return false if no data was deleted
   */
  delete(where) {
    return new Promise(async (resolve, reject) => {
      const queryText = `
        DELETE FROM ${this.TABLE}
        WHERE ${QueryHelper.parseWhere(where, QueryHelper.AND, false)}`;

      const params = QueryHelper.parseParams(data);

      try {
        const delete_ = await connection.query(queryText, params);
        const {rowCount} = delete_;
        if (rowCount < 1) {
          resolve(false);
        }
        resolve(delete_);
      } catch (error) {
        reject(error);
      }
    });
  }

}

export default Query;