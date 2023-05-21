using Car_Detailing_Backend.Data.Models;

namespace Car_Detailing_Backend.Data.Interface
{
    public interface ICalendarManagement
    {
        public void CreateNewTerms();
        public Task<List<DateModelShort>> getAllAvailableDaysAsync();
        public Task<DateModel?> geAvailableDayByIdAsync(int id);
    }
}
