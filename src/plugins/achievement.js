const achievement = {
    // 所有成就
    all () {
        return [
            {
                name: '灵宠成就',
                type: 'pet',
                data: this.pet()
            },
            {
                name: '探索成就',
                type: 'monster',
                data: this.monster()
            },
            {
                name: '装备成就',
                type: 'equipment',
                data: this.equipment()
            }
        ]
    },
    // 灵宠相关成就
    pet () {
        return [
            {
                // 成就ID
                id: 1,
                // 成就名称
                name: '气血神宠',
                // 成就奖励
                award: 1000,
                //达成条件
                condition: {
                    dodge: 0,
                    health: 23500,
                    attack: 0,
                    defense: 0,
                    critical: 0
                }
            },
            {
                id: 2,
                name: '攻击神宠',
                award: 1000,
                condition: {
                    dodge: 0,
                    health: 0,
                    attack: 7050,
                    defense: 0,
                    critical: 0
                }
            },
            {
                id: 3,
                name: '防御神宠',
                award: 1000,
                condition: {
                    dodge: 0,
                    health: 0,
                    attack: 0,
                    defense: 705,
                    critical: 0
                }
            },
            {
                id: 4,
                name: '闪避神宠',
                award: 1000,
                condition: {
                    dodge: 0.47,
                    health: 0,
                    attack: 0,
                    defense: 0,
                    critical: 0
                }
            },
            {
                id: 5,
                name: '暴击神宠',
                award: 1000,
                condition: {
                    dodge: 0,
                    health: 0,
                    attack: 0,
                    defense: 0,
                    critical: 0.47
                }
            },
            {
                id: 6,
                name: '灵宠天花板',
                award: 10000,
                condition: {
                    dodge: 0.47,
                    health: 23500,
                    attack: 7050,
                    defense: 705,
                    critical: 0.47
                }
            }
        ]
    },
    // 装备相关成就
    equipment () {
        return [];
    },
    // 打怪相关成就
    monster () {
        return [          {
            // 成就ID
            id: 7,
            // 成就名称
            name: '初涉修仙',
            // 成就奖励
            award: 10,
            //达成条件
            condition: {
                jishaNum: 1
            }
        },  {
            id: 8,
            name: '百人斩',
            award: 100,
            condition: {
                jishaNum: 100
            }
        },   {
            id: 9,
            name: '万人屠',
            award: 1000,
            condition: {
                jishaNum: 10000
            }
        },   {
            id: 10,
            name: '地府常客',
            award: 100,
            condition: {
                ggNum: 999
            }
        },];
    }
};
export default achievement;