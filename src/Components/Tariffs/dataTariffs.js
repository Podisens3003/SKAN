// import blob from './images/bulb.svg';
import blob from '../../images/bulb.svg';

import target from '../../images/target.svg';
import laptop from '../../images/laptop.svg';

export const tariffs = [
    {
        rateName: 'Beginner',
        consumer: 'Для небольшого исследования',
        color: '#FFB64F',
        img: blob,
        plans: 
            [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7',
            ],
        cost: 799,
        prevCost: 1200,
        mounthCost: 150   
    },
    {
        rateName: 'Pro',
        consumer: 'Для HR и фрилансеров',
        color: '#7CE3E1',
        img: target,

        plans: 
            [
                'Все пункты тарифа Beginner',
                'Экспорт истории',
                'Рекомендации по приоритетам',
            ],
        cost: 1200,
        prevCost: 2600,
        mounthCost: 279   
    },
    {
        rateName: 'Business',
        consumer: 'Для корпоративных клиентов',
        color: 'black',
        img: laptop,
        plans: 
            [
                'Все пункты тарифа Pro',
                'Безлимитное количество запросов',
                'Приоритетная поддержка',
            ],
        cost: 2379,
        prevCost: 3700,
        mounthCost: null   
    }
];