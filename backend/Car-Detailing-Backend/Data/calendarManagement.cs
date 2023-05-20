using Car_Detailing_Backend.Data.Interface;

namespace Car_Detailing_Backend.Data
{
    public class calendarManagement : ICalendarManagement
    {

        readonly string filePathToCalender = @"./Data/data_files/calendar.csv";
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

                day = day.AddDays(1);

                for (int i = 0; i < 5; i++)
                {
                    day = day.Date + new TimeSpan(9, 0, 0);
                    for (int j = 0; j < 11; j++)
                    {
                        var isActive = rnd.Next(0, 4);
                        if (isActive == 1 || isActive == 2)
                        {
                            calendar.Add(day.ToString());
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

    }
}
