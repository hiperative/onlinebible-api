import { Controller, Get } from 'routing-controllers';
import config from '../config';

const { appName: name, appVersion: version } = config;

@Controller('/api')
export class ApiController {
  @Get('/')
  public get() {
    return { message: name };
  }

  @Get('/health')
  public health() {
    return {
      status: 'OK',
      name,
      version,
      uptime: process.uptime(),
    };
  }
}
