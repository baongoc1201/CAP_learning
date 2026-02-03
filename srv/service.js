// const cds = require('@sap/cds');

// module.exports = async function () {
//   const { A_BusinessPartner } = this.entities;

//   this.on('READ', A_BusinessPartner, async (req) => {
//     const bpSrv = await cds.connect.to('BusinessPartnerA2X');
//     return bpSrv.run(req.query);
//   });
// };