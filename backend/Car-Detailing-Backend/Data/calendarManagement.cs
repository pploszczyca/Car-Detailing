using Car_Detailing_Backend.Data.Interface;
using Car_Detailing_Backend.Data.Models;

namespace Car_Detailing_Backend.Data
{
    public class calendarManagement : ICalendarManagement
    {
        //dev
        //readonly string filePathToCalender = @"./Data/data_files/calendar.csv";
        //prod
        readonly string filePathToCalender = @"./calendar.csv";
        readonly string format = "dd/MM/yyyy HH:mm";
        private readonly IReadingAndWriting readingAndWriting;

        public calendarManagement(IReadingAndWriting readingAndWriting)
        {
            this.readingAndWriting = readingAndWriting;
        }


        public void CreateNewTerms()
        {
            try
            {
                var calendar = new List<string>();
                var day = DateTime.Now;
                var rnd = new Random();
                var id = 1;
                string date = string.Empty;

                day = day.AddDays(1);

                for (int i = 0; i < 5; i++)
                {
                    day = day.Date + new TimeSpan(9, 0, 0);
                    for (int j = 0; j < 11; j++)
                    {
                        var isActive = rnd.Next(0, 4);
                        if (isActive == 1 || isActive == 2)
                        {
                            date = id.ToString() + "," + day.ToString("dd/MM/yyyy HH:mm") + "," + true.ToString();
                            calendar.Add(date);
                            id++;
                        }
                        day = day.AddHours(1);
                    }
                    day = day.AddDays(1);
                }

                readingAndWriting.SavingThingsToAFileAsync(filePathToCalender, calendar);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DateModel?> geAvailableDayByIdAsync(int id)
        {
            try
            {
                DateModel? day = new DateModel();
                bool found = false;
                var calendar = await readingAndWriting.ReadingThingsOnFileAsync(filePathToCalender);
                foreach (var item in calendar)
                {
                    var dayObj = item.Split(',');
                    var dayID = int.Parse(dayObj[0]);
                    if (dayID == id)
                    {
                        day.dateID = dayID;
                        day.datetime = DateTime.ParseExact(dayObj[1], format, null);
                        day.isAvaible = bool.Parse(dayObj[2]);
                        found = true;
                        break;
                    }
                }

                if (!found)
                {
                    day = null;
                }

                return day;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DateModelShort>> getAllAvailableDaysAsync()
        {
            try
            {
                var daysAilable = new List<DateModelShort>();
                var calendar = await readingAndWriting.ReadingThingsOnFileAsync(filePathToCalender);
                foreach (var item in calendar)
                {
                    var day = item.Split(',');
                    var isAvailable = bool.Parse(day[2]);
                    if (isAvailable)
                    {
                        var newAvailableDay = new DateModelShort();
                        newAvailableDay.dateID = int.Parse(day[0]);
                        newAvailableDay.datetime = DateTime.ParseExact(day[1], format, null);
                        daysAilable.Add(newAvailableDay);
                    }
                }
                return daysAilable;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
