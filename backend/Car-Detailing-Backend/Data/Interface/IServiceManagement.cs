using Car_Detailing_Backend.Data.Models;

namespace Car_Detailing_Backend.Data.Interface
{
    public interface IServiceManagement
    {
        public Task<List<list_of_services>> ReadingOfServicesAsyns();
    }
}
