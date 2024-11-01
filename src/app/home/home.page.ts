import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonThumbnail, IonCard, IonCardContent, IonAvatar, IonSkeletonText } from '@ionic/angular/standalone';
import { HeroService } from '../services/hero.service';
import { Character } from '../interfaces/hero-response';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationServiceService } from '../services/translation-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [TranslateModule,CommonModule,IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonThumbnail, IonCard, IonCardContent,IonAvatar, IonSkeletonText],
})
export class HomePage implements OnInit {
  /**
   * Inyecta el servicio de enrutamiento para navegar entre páginas
   */
  private router = inject(Router);
  /**
   * Inyecta el servicio HeroService para obtener datos de los héroes
   */
  private heroService = inject(HeroService);
  /**
   * Inyecta el servicio TranslationServiceService para la gestión de la localización y traducción
   */
  private translationService = inject(TranslationServiceService);
  
  /**
   * Array que almacena la lista de héroes obtenidos del servicio
   */
  public heroes: Character[] = [];
  /**
   * Flag indica si el servicio de héroes está cargando
   */
  public isServiceLoading = true;
  /**
   * Almacena un mensaje de error si ocurre un problema al cargar los héroes
   */
  public error: string | undefined;
  /**
   * Array para generar skeletons mientras se cargan los héroes
   */
  public skeletonItems = new Array(10);

  async ngOnInit(): Promise<void> {
    await this.translationService.setTranslation("home")
    this.getHeroes();
  }

  /**
   * Navega a la página de detalles de un héroe específico
   * @param hero Información del heroe
   */
  showHeroDetail(hero: Character): void {
    this.heroService.setHeroDetail(hero);
    this.router.navigateByUrl("/details", {
      replaceUrl: true
    });
  }

  /**
   * Obtiene la lista de héroes del servicio
   */
  private async getHeroes(): Promise<void> {
    try {
      this.heroes = await this.heroService.getHeroes();
    } catch (error) {
      this.error = String(error);
    }
    this.isServiceLoading = false;
  }
}
