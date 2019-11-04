import { environment } from 'src/environments/environment'

const serverAddress = environment.apiUrl;

export const PlansUrls = {
  activePlans: serverAddress.concat('/payment-plans/active'),
  checkout: serverAddress.concat('/payment/checkout')
}
