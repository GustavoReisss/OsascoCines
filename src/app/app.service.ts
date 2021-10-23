import { MessageService } from "primeng/api";
import { ApiService } from "./services/api.service";
import { LoadingService } from './services/loading.service';
import { TesteService } from './services/teste.service';

export const APP_SERVICES = [
  ApiService,
  LoadingService,
  TesteService,
  MessageService
]