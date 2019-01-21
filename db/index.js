import sqlite3 from 'sqlite3'
import config from '../config'

class DB {
  constructor () {
    this.config = config
    this.sqlite3 = null

    this.Constructor()
  }
  getDB () {
    if (this.sqlite3 == null) {
      this.sqlite3 = new sqlite3.Database(this.config.dbFile)
    }
    return this.sqlite3
  }
  init () {
    console.log('---------------------------------------初始化数据库')
    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_USER(
      USER_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      NAME VARCHAR(100),
      COMPANY VARCHAR(100),
      TEL VARCHAR(50),
      WX_ID VARCHAR(50),
      IS_CARD INT
      )`
    )
    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_USER_INFO(
      BABY_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      USER_ID VARCHAR(32),
      BIRTHDAY VARCHAR(100),
      COMPANY VARCHAR(100),
      SEX VARCHAR(50),
      NAME VARCHAR(50)
      )`
    )
    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_EN_PLAN(
      PLAN_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      USER_ID VARCHAR(32),
      PLAN_CONTENT VARCHAR(100)
      )`
    )
    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_EN_CATEGORY(
      CATEGORY_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      CATEGORY_NAME VARCHAR(32)
      )`
    )

    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_EN_TYPE(
      TYPE_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      CATEGORY_ID VARCHAR(32),
      TYPE_NAME VARCHAR(32)
      )`
    )

    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_EN_BOOK_RELATE(
      RELATE_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      RECORD_ID VARCHAR(32),
      BOOK_NAME VARCHAR(32),
      IMAGE_PATH VARCHAR(1000)
      )`
    )

    this.sqlite3.run(`
      CREATE TABLE IF NOT EXISTS T_EN_CARD_RECORD(
      RECORD_ID VARCHAR(32) PRIMARY KEY NOT NULL,
      USER_ID VARCHAR(32),
      TYPE_ID VARCHAR(32),
      CATEGERY_ID VARCHAR(32),
      RECORD_TIME VARCHAR(100),
      RECORD_CONTENT VARCHAR(1000),
      RECORD_NUMBER VARCHAR(100),
      IMAGE_PATH VARCHAR(1000),
      NUM VARCHAR(100)
      )`
    )
    this.sqlite3.run('PRAGMA foreign_keys=ON')
    this.sqlite3.run('PRAGMA synchronous=OFF')
    this.sqlite3.run('PRAGMA journal_mode=MEMORY')
    this.sqlite3.run('PRAGMA default_cache_size=10000')
    this.sqlite3.run('PRAGMA locking_mode=EXCLUSIVE')
  }
  Constructor () {
    this.getDB()
    this.init()
  }
}
export default new DB()
