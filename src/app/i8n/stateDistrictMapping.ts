export class StateDistrictMapper {

    getDistrictByState(state) {
      let listOfDistricts;
      switch (state.toUpperCase()) {
        case 'TAMILNADU':
          listOfDistricts = ['Ariyalur', 'Erode', 'Nilgiris', 'Cuddalore', 'Karur', 'Kancheepuram', 'Krishnagiri', 'Coimbatore',
                              'Sivagangai', 'Chennai', 'Salem', 'Thanjavur', 'Dharmapuri', 'Dindigul', 'Trichirappalli',
                              'Thirunelveli', 'Tiruppur', 'Thiruvannamalai', 'Thiruvallur', 'Thiruvarur', 'Tuticorin',
                              'Theni', 'Nagapattinam', 'Kanyakumari', 'Namakkal', 'Pudukottai', 'Perambalur', 'Madurai',
                              'Ramanathapuram', 'Virudhunagar', 'Viluppuram', 'Vellore'];
      }
      return listOfDistricts;
    }
  }
  