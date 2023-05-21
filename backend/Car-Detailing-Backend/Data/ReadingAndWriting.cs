﻿using Car_Detailing_Backend.Data.Interface;

namespace Car_Detailing_Backend.Data
{
    public class ReadingAndWriting : IReadingAndWriting
    {
        public async Task<List<string>> ReadingThingsOnFileAsync(string filePath)
        {
            try
            {
                var data = new List<string>();
                var file = await File.ReadAllLinesAsync(filePath);
                foreach (var line in file)
                {
                    data.Add(line);
                }
                return data;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task SavingThingsToAFileAsync(string filePath, List<string> data)
        {
            try
            {
                using (StreamWriter writer = new StreamWriter(filePath))
                {
                    foreach (var line in data)
                    {
                        await writer.WriteLineAsync(line);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
