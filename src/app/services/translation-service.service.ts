import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Device } from '@capacitor/device';
import { TranslateService } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class TranslationServiceService {
  /**
   * Inyecta el servicio de traducción para gestionar las traducciones en la aplicación
   */
  private translateService = inject(TranslateService)
  /**
   * Inyecta HttpClient para realizar solicitudes HTTP para obtener traducciones
   */
  private httpClient = inject(HttpClient);

  /**
   * Configura la traducción para un módulo específico
   * @param module Nombre del modulo a cargar la traducción
   */
  async setTranslation(module: string): Promise<void> {
    const lang = await Device.getLanguageCode();
    const translation: Object = await this.getTranslation(lang.value, module);
    this.translateService.setTranslation(lang.value, translation);
    this.translateService.use(lang.value);
    return;
  }
  /**
   * Realiza una solicitud para obtener el archivo de traducción para el idioma y módulo específicos
   * @param lang Idioma de la traducción
   * @param module Modulo a cargar
   * @returns Objeto json de la traducción cargada
   */
  private getTranslation(lang: string, module: string): Promise<Object> {
    return new Promise((resolve) => {
      createTranslateLoader(this.httpClient, `./assets/i18n/${module}-`).getTranslation(lang)
        .subscribe((response) => {
          resolve(response);
        })
    })
  }
}
