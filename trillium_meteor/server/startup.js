Meteor.startup(() => {
	if (Applications.find().count() === 0 ) {
		const applications = [{
      'name': 'accessMoneyManager',
      'description': 'Treasury soultions commercial banking app'
    }, {
      'name': 'MTS',
      'description': 'Money Transfer System by ACI to facilitate transfers and wires'
    }, {
      'name': 'GTF',
      'description': 'Global Trade Flow application under Commercial lending track'
    }];
	
    applications.forEach((application) => {
			Applications.insert(application)
		});
   }
});
	