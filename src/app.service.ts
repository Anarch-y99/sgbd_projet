import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) {
    // doit s'exécuter à chaque instanciation du service
    // Donne accès à this.configService et l'ensemble de ses fonctions
    const mongoDbHost = configService.get('MONGO_DB_HOST'); // Permet de récupérer la valeur de MONGO_DB_HOST dans le fichier .env
    console.log(mongoDbHost);
    this.logger.debug('MongoDB Host: ${mongoDbHost}');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
