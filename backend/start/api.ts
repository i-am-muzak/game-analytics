import Route from '@ioc:Adonis/Core/Route'

/* Routes */
import {AuthRoutes} from './routes/auth'

const api_prefix = "api"

// Imports
AuthRoutes.prefix(api_prefix)