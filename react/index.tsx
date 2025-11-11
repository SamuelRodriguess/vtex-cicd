/* eslint-disable no-duplicate-case */
import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      break
    }

    case 'vtex:addToCart': {
      break
    }

    case 'vtex:productImpression': {
      break
    }

    case 'vtex:orderPlacedTracked': {
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
