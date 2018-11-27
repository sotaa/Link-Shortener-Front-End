
const serverAddress = 'http://localhost:3000'

export const PlansUrls = {
  activePlans: serverAddress.concat('/payment-plans/active'),
  checkout: serverAddress.concat('/payment/checkout')
}
