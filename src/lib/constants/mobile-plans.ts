export const ALL_DEVICES = {
  iphone15promax: { name: "Apple iPhone 15 Pro Max", price: 1399 },
  iphone15pro: { name: "Apple iPhone 15 Pro", price: 1199 },
  iphone15plus: { name: "Apple iPhone 15 Plus", price: 999 },
  iphone15: { name: "Apple iPhone 15", price: 899 },
  galaxyzfold5: { name: "Samsung Galaxy Z Fold5 5G", price: 1799 },
  galaxyzflip5: { name: "Samsung Galaxy Z Flip5 5G", price: 999 },
  galaxys23ultra: { name: "Samsung Galaxy S23 Ultra 5G", price: 1199 },
  galaxys23plus: { name: "Samsung Galaxy S23+ 5G", price: 999 },
  galaxys23: { name: "Samsung Galaxy S23 5G", price: 799 },
  pixel8pro: { name: "Google Pixel 8 Pro", price: 999 },
  pixel8: { name: "Google Pixel 8", price: 699 },
  pixel7a: { name: "Google Pixel 7a", price: 499 }
} as const;

export const PLAN_TYPES = {
  UNLIMITED_PLUS_PROMO: { name: "Unlimited Plus Promo", price: 30 },
  UNLIMITED_PLUS: { name: "Unlimited Plus", price: 50 },
  UNLIMITED: { name: "Unlimited", price: 30 },
  BY_THE_GIG: { name: "By the Gig", price: 20 }
} as const;