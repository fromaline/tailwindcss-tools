import { writable } from 'svelte/store'
import { random } from 'colord'

export const pickedColor = writable(random().toHex())
