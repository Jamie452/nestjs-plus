import { AmqpConnection } from '@nestjs-plus/rabbitmq';
import { Test, TestingModule } from '@nestjs/testing';
import { MessagingController } from './messaging.controller';

describe('Messaging Controller', () => {
  let controller: MessagingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagingController],
      providers: [
        {
          provide: AmqpConnection,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MessagingController>(MessagingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
