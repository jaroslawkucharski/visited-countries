import axios from 'axios'

export const get = (url: string, config: object = {}) =>
	axios.get(url, config).then(response => response)

export const remove = (url: string, config: object = {}) =>
	axios.delete(url, config).then(response => response)

export const post = (url: string, data: object, config: object = {}) =>
	axios.post(url, data, config).then(response => response)

export const put = (url: string, data: object, config: object = {}) =>
	axios.put(url, data, config).then(response => response)

export const patch = (url: string, data: object, config: object = {}) =>
	axios.patch(url, data, config).then(response => response)
