import { createConnection } from 'typeorm';
import {Unit} from '../src/units/entities/unit.entity'

const insertInitialData = async () => {
  const connection = await createConnection();
  const unitRepository = connection.getRepository(Unit);

  const units = [
    { unit_name: 'second', korean_name: '초', symbol: 's' },
    { unit_name: 'percent', korean_name: '퍼센트', symbol: '%' },
    { unit_name: 'won', korean_name: '원', symbol: '₩' },
    { unit_name: 'count', korean_name: '횟수', symbol: '' },
  ];

  for (const unit of units) {
    const unitEntity = unitRepository.create(unit);
    await unitRepository.save(unitEntity);
  }

  await connection.close();
};

insertInitialData().catch(console.error);
