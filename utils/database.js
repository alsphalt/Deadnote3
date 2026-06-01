/**
 * Database Utility
 * Handle database operations (optional MongoDB integration)
 */

const fs = require('fs-extra');
const path = require('path');
const logger = require('./logger.js');

class Database {
  constructor(type = 'json') {
    this.type = type;
    this.dataDir = path.join(__dirname, '../data');
    fs.ensureDirSync(this.dataDir);
  }

  /**
   * Save data to file
   */
  save(filename, data) {
    try {
      const filePath = path.join(this.dataDir, `${filename}.json`);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      logger.success(`Saved data to ${filename}`);
    } catch (error) {
      logger.error(`Failed to save data: ${error.message}`);
      throw error;
    }
  }

  /**
   * Load data from file
   */
  load(filename) {
    try {
      const filePath = path.join(this.dataDir, `${filename}.json`);
      if (!fs.existsSync(filePath)) {
        logger.warn(`File not found: ${filename}`);
        return null;
      }
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      logger.error(`Failed to load data: ${error.message}`);
      return null;
    }
  }

  /**
   * Get all files
   */
  getAll() {
    try {
      const files = fs.readdirSync(this.dataDir);
      return files.filter((file) => file.endsWith('.json'));
    } catch (error) {
      logger.error(`Failed to list files: ${error.message}`);
      return [];
    }
  }

  /**
   * Delete file
   */
  delete(filename) {
    try {
      const filePath = path.join(this.dataDir, `${filename}.json`);
      if (fs.existsSync(filePath)) {
        fs.removeSync(filePath);
        logger.success(`Deleted file: ${filename}`);
      }
    } catch (error) {
      logger.error(`Failed to delete file: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new Database();
