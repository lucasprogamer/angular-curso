import { Injectable } from '@angular/core';

const configKeyName = "config";

/**
 * Configurações de usuario
 */
@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name:  "",
    username: "",

  };

  private apiCredentials = {
    basePath: "https://api.themoviedb.org/3",
    key: "144bb6cc451be2c9bebf53c17da9a009",
    lang: "pt-BR",
  }

  constructor() {

  }

  /**
   * Recupera dados do localStorage
   */
  getConfigData(): any {
    return localStorage.getItem(configKeyName);
  }

  /**
   * Grava dados do localStorage
   */
  setConfigData(showSlide?: boolean, name?: string, username?: string ){

    if(showSlide) {
      this.config.showSlide = showSlide;
    }
    if(name) {
      this.config.name = name;
    }
    if(username) {
      this.config.username = username;
    }

    localStorage.setItem(configKeyName, JSON.stringify(this.config));

  }

  getApiCredentials() {
      return this.apiCredentials;
  }


}
