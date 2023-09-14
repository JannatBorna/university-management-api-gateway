import { createClient } from 'redis';
import logger from './logger';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => logger.error('Redis Error', err));
redisClient.on('connect', (err) => logger.error('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
