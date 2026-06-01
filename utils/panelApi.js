/**
 * Panel API Utility
 * Handle API calls to the hosting panel
 */

const axios = require('axios');
const logger = require('./logger.js');

class PanelAPI {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get server status
   */
  async getServerStatus(serverId) {
    try {
      const response = await this.client.get(`/api/servers/${serverId}`);
      logger.success(`Fetched status for server ${serverId}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch server status: ${error.message}`);
      throw error;
    }
  }

  /**
   * Send command to server
   */
  async sendCommand(serverId, command) {
    try {
      const response = await this.client.post(`/api/servers/${serverId}/command`, {
        command,
      });
      logger.success(`Command sent to server ${serverId}: ${command}`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to send command: ${error.message}`);
      throw error;
    }
  }

  /**
   * Restart server
   */
  async restartServer(serverId) {
    try {
      const response = await this.client.post(`/api/servers/${serverId}/restart`);
      logger.success(`Server ${serverId} restart initiated`);
      return response.data;
    } catch (error) {
      logger.error(`Failed to restart server: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get system stats
   */
  async getSystemStats() {
    try {
      const response = await this.client.get('/api/system');
      logger.success('Fetched system stats');
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch system stats: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get server list
   */
  async getServers() {
    try {
      const response = await this.client.get('/api/servers');
      logger.success('Fetched server list');
      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch server list: ${error.message}`);
      throw error;
    }
  }
}

module.exports = PanelAPI;
