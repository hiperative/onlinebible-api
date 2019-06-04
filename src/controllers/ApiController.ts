import { Controller, Get } from 'routing-controllers';

@Controller('/api')
export class ApiController {
  @Get('/')
  public get() {
    return { message: 'Bible API' };
  }

  @Get('/health')
  public health() {
    return { status: 'OK', uptime: process.uptime() };
  }
}
