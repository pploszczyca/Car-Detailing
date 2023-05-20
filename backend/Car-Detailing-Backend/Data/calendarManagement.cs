namespace Car_Detailing_Backend.Data
{
    public class calendarManagement : ICalendarManagement
    {

        readonly string filePath = @"./Data/data_files/calendar.csv";

        public void CreateNewTerms()
        {
            var calendar = new List<DateTime>();
            var day = DateTime.Now;
            var rnd = new Random();

            day = day.AddDays(1);

            for (int i = 0; i < 5; i++)
            {
                day = day.Date + new TimeSpan(9, 0, 0);
                for (int j = 0; j < 11; j++)
                {
                    calendar.Add(day);
                    day = day.AddHours(1);
                }
                day = day.AddDays(1);
            }

            using (StreamWriter writer = new StreamWriter(filePath))
            {
                foreach (var line in calendar)
                {
                    var isActive = rnd.Next(0, 4);
                    if (isActive == 1 || isActive == 2)
                    {
                        writer.WriteLine(line);
                    }
                }
            }
        }
    }
}
