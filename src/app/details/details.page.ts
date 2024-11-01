import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeroService } from '../services/hero.service';
import { Character } from '../interfaces/hero-response';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';
import { createTranslateLoader } from 'src/main';
import { HttpClient } from '@angular/common/http';
import { TranslationServiceService } from '../services/translation-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [TranslateModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonThumbnail, IonItem, IonLabel]
})
export class DetailsPage implements OnInit {
  /**
   * Inyecta el servicio HeroService para acceder al detalle del héroe seleccionado
   */
  private heroService = inject(HeroService);
  /**
   * Inyecta el servicio TranslationServiceService para configurar la traducción de la página
   */
  private translationService = inject(TranslationServiceService);
  /**
   * Datos del héroe seleccionado
   */
  public hero: Character | null = null;

  async ngOnInit(): Promise<void> {
    await this.translationService.setTranslation("details")
    this.hero = this.heroService.getHeroDetail()();
  }
}
