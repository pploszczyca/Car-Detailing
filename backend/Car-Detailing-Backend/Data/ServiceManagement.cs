using Car_Detailing_Backend.Data.Interface;
using Car_Detailing_Backend.Data.Models;

namespace Car_Detailing_Backend.Data
{
    public class ServiceManagement : IServiceManagement
    {
        private readonly string pathToServices = @"./Data/data_files/serviceData.csv";
        private readonly IReadingAndWriting readingAndWriting;

        public ServiceManagement(IReadingAndWriting readingAndWriting)
        {
            this.readingAndWriting = readingAndWriting;
        }

        public async Task<List<list_of_services>> ReadingOfServicesAsyns()
        {
            try
            {
                List<list_of_services> list = new List<list_of_services>();
                var line = await readingAndWriting.ReadingThingsOnFileAsync(pathToServices);
                foreach (var row in line)
                {
                    var price_list_obj = new list_of_services();
                    var text = row.Split(',');
                    price_list_obj.service_id = int.Parse(text[0]);
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
