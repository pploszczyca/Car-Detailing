using Car_Detailing_Backend.Data;
using Car_Detailing_Backend.Data.Interface;
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
        private readonly ICalendarManagement calendar;
        private readonly IServiceManagement service;

        public CarDetailingController
            (ILogger<CarDetailingController> logger, 
            ICalendarManagement calendar, 
            IServiceManagement service)
        {
            this.logger = logger;
            this.calendar = calendar;
            this.service = service;
        }


        /// <summary>
        /// Get Services
        /// </summary>
        /// <returns>List of services</returns>
        /// <response code="200">Ok</response>
        /// <returns></returns>
        /// <remarks>
        /// Sample request:
        ///
        ///     Get /Services
        ///     {
        ///         "id": 1,
        ///         "name": "Mycie ręczne",
        ///         "type": "Mycie zewnętrzne",
        ///         "price": 50
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
                var dane = await service.ReadingOfServicesAsyns();
                return Ok(dane);
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get Service");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }


        /// <summary>
        /// Creating a new calendar
        /// </summary>
        /// <returns>List of services</returns>
        /// <response code="200">Ok</response>
        /// <response code="400">BadRequest</response>
        [HttpGet(Name = "/generatenewdates")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult generatenewdates()
        {
            try
            {
                calendar.CreateNewTerms();
                return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get generatenewdates");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

        /// <summary>
        /// Get locations
        /// </summary>
        /// <returns>List of locations</returns>
        /// <response code="200">Ok</response>
        /// <returns></returns>
        /// <remarks>
        /// Sample request:
        ///
        ///     Get /locations
        ///     {
        ///         "id": 1,
        ///         "name": "Zdzisiek warsztat",
        ///         "street": "ul. Wrocławska 11",
        ///         "city": "Kraków"
        ///     }
        ///</remarks>
        /// <response code="400">BadRequest</response>
        [HttpGet(Name = "/locations")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<list_of_services>>> locations()
        {
            try
            {
                var dane = await service.ReadingOfLocationsAsyns();
                return Ok(dane);
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get locations");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

    }
}
