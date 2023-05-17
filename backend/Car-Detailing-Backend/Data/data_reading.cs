using Car_Detailing_Backend.Data.Models;
using Microsoft.VisualBasic.FileIO;
using System;

namespace Car_Detailing_Backend.Data
{
    public class data_reading
    {
        private readonly string path = @"./Data/data_files/serviceData.csv";
        List<list_of_services> list = new List<list_of_services>();

        public async Task<List<list_of_services>> readDataAsyns()
        {
            try
            {
                var line = await File.ReadAllLinesAsync(path);
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
