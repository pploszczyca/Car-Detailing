using Car_Detailing_Backend.Data.Interface;
using Car_Detailing_Backend.Data.Models;

namespace Car_Detailing_Backend.Data
{
    public class ServiceManagement : IServiceManagement
    {
        //dev
        private readonly string pathToServices = @"./Data/data_files/serviceData.csv";
        private readonly string pathToLocation = @"./Data/data_files/locations.csv";
        //prod
        //private readonly string pathToServices = @"./serviceData.csv";
        //private readonly string pathToLocation = @"./locations.csv";
        private readonly IReadingAndWriting readingAndWriting;

        public ServiceManagement(IReadingAndWriting readingAndWriting)
        {
            this.readingAndWriting = readingAndWriting;
        }

        public async Task<List<LocationsModel>> ReadingOfLocationsAsync()
        {
            try
            {
                var locationList = new List<LocationsModel>();
                var data = await readingAndWriting.ReadingThingsOnFileAsync(pathToLocation);
                foreach (var row in data)
                {
                    var locationObj = new LocationsModel();
                    var location = row.Split(',');
                    locationObj.locationsID = int.Parse(location[0]);
                    locationObj.name = location[1];
                    locationObj.street = location[2];
                    locationObj.city = location[3];
                    locationList.Add(locationObj);
                }
                return locationList;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<ListOfServicesModel>> ReadingOfServicesAsync()
        {
            try
            {
                List<ListOfServicesModel> list = new List<ListOfServicesModel>();
                var line = await readingAndWriting.ReadingThingsOnFileAsync(pathToServices);
                foreach (var row in line)
                {
                    var price_list_obj = new ListOfServicesModel();
                    var text = row.Split(',');
                    price_list_obj.servicesID = int.Parse(text[0]);
                    price_list_obj.name = text[1];
                    price_list_obj.type = text[2];
                    price_list_obj.price = double.Parse(text[3]);
                    list.Add(price_list_obj);
                }

                return list;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
