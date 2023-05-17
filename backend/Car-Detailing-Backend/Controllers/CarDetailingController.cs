using Car_Detailing_Backend.Data;
using Car_Detailing_Backend.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Car_Detailing_Backend.Controllers
{
    [ApiController]
    [Route("[action]")]
    [Produces("application/json")]
    public class CarDetailingController : ControllerBase
    {
        private readonly ILogger<CarDetailingController> logger;

        public CarDetailingController(ILogger<CarDetailingController> logger)
        {
            this.logger = logger;
        }


        /// <summary>
        /// Get Services
        /// </summary>
        /// <returns>List of services</returns>
        /// <response code="200">Ok</response>
        /// <remarks>
        /// {
        ///     “id”: 1,
        ///     “name”: “Mycie ręczne”,
        ///     “type”: “Mycie zewnętrzne”,
        ///     “price”: 50,
        ///     }
        ///</remarks>
        /// <response code="400">BadRequest</response>
        [HttpGet(Name = "/services")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<list_of_services>>> Services()
        {
            try
            {
                var data = new data_reading();
                var dane = await data.readDataAsyns();
                return Ok(dane);
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get Service");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

    }
}
