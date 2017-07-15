'use strict';

function companyInterface() {
  return {
    create(request, response) {
      response.send(request.body);
    }
  }
};

module.exports = companyInterface();

/*
//Days enum
const DaysEnum = {
  SUNDAY: 'Domingo',
  MONDEY: 'Segunda-feira',
  TUESDAY: 'Terça-feira',
  WEDNESDAY: 'Quarta-feira',
  THURSDAY: 'Quinta-feira',
  FRIDAY: 'Sexta-feira',
  SATURDAY: 'Sábado'
}

// business time
{
  companyId: '',
  timezone: 'GMT-3',
  days: [
    {
      day: DaysEnum.MONDEY,
      shitfsPerDay: 2,
      workShift: [
        {
          startTime: '0800',
          endTime: '1200'
        },
        {
          startTime: '1330',
          endTime: '1830'
        }
      ]
    },
    {
      day: DaysEnum.SUNDAY,
      shitfsPerDay: 0,
      workShift: []
    }
  ]
}
*/

/* // Company model
  {
    name: 'Company name',
    businessTimeId: ''
  }
*/

// router.post('/company', company.create)
// router.get('/company', company.getAll)
// router.get('/company/:id', company.getById)
// router.put('/company/:id', company.update)
// router.delete('/company/:id', company.remove)
