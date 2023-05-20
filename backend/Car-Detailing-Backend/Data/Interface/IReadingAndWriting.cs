namespace Car_Detailing_Backend.Data.Interface
{
    public interface IReadingAndWriting
    {
        public Task<List<string>> ReadingThingsOnFileAsync(string filePath);
        public Task SavingThingsToAFileAsync(string filePath, List<string> data);
    }
}
