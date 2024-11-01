import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorHttp, HttpOptions, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Character, HeroDataResponse } from '../interfaces/hero-response';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /**
   * Límite de héroes a obtener por petición
   */
  private heroLimit = "20";
  /**
   * Signal que almacena el detalle de un héroe seleccionado
   */
  private heroDetail = signal<Character | null>(null);

  /**
   * Método para obtener la lista de héroes desde la API de Marvel
   * @returns Listado de heroes
   */
  async getHeroes(): Promise<Character[]> {
    const { base_url, characters, apikey, hash } = environment.marvel;
    const url = `${base_url}${characters}`;

    const options: HttpOptions = {
      url,
      params: {
        "apikey": apikey,
        "limit": this.heroLimit,
        "hash": hash,
        "ts": "1"
      }
    }

    const response: HttpResponse = await CapacitorHttp.get(options)
    return (response.data as HeroDataResponse).data.results;
  }

  /**
   * Almacena el detalle de un héroe
   * @param detail Información del heroe
   */
  setHeroDetail(detail: Character): void {
    this.heroDetail.set(detail);
  }

  /**
   * Retorna la Signal que contiene el detalle del héroe seleccionado
   * @returns Información del heroe
   */
  getHeroDetail(): WritableSignal<Character | null>  {
    return this.heroDetail;
  }
}
