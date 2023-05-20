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

        /// <summary>
        /// Get dates
        /// </summary>
        /// <returns>List of available dates</returns>
        /// <response code="200">Ok</response>
        /// <returns></returns>
        /// <remarks>
        /// Sample request:
        ///
        ///     Get /locations
        ///     {
        ///         "id": 1,
        ///         "datetime": "DD/MM/YYYY hh:mm
        ///     }
        ///</remarks>
        /// <response code="400">BadRequest</response>
        [HttpGet(Name = "/dates")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<DateModelShort>>> dates()
        {
            try
            {
                var dane = await calendar.getAllAvailableDaysAsync();
                return Ok(dane);
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get dates");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

        /// <summary>
        /// Get date by id
        /// </summary>
        /// <returns>List of available dates</returns>
        /// <response code="200">Ok</response>
        /// <returns></returns>
        /// <remarks>
        /// Sample request:
        ///
        ///     Get /locations
        ///     {
        ///         "id": 1,
        ///         "datetime": "DD/MM/YYYY hh:mm
        ///     }
        ///</remarks>
        /// <response code="400">Date with this id does not exist</response>
        /// <response code="404">Date is not available</response>
        [HttpGet(Name = "/date/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DateModelShort>> date(int id)
        {
            try
            {
                DateModel? dane = await calendar.geAvailableDayByIdAsync(id);
                if (dane == null)
                {
                    return BadRequest("Date with this id does not exist");
                }
                else if (dane.isAvaible == true)
                {
                    var day = new DateModelShort();
                    day.dateID = dane.dateID;
                    day.datetime = dane.datetime;
                    return Ok(day);
                }
                else
                {
                    return NotFound("Date is not available");
                }
                
            }
            catch (Exception ex)
            {
                logger.LogError("Błąd działania metdoy Get date by id");
                logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

    }
}
