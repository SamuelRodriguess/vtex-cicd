/* eslint-disable no-duplicate-case */
import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  // eslint-disable-next-line no-console
  console.log('cicd ok')
  switch (e.data.eventName) {
    case 'vtex:addToCart': {
      break
    }

    case 'vtex:productImpression': {
      break
    }

    case 'vtex:productClick': {
      break
    }

    case 'vtex:removeFromCart': {
      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
