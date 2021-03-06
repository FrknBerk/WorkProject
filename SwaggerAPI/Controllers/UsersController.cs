using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwaggerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        /// <summary>
        /// Get ALL Users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _userService.GetAll();
            if (list != null)
            {
                return Ok(list);
            }
            return BadRequest();
            
        }

        /// <summary>
        /// Create a User
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Add(User user)
        {
            var result = _userService.Add(user);
            return Ok(result);
        }

        /// <summary>
        /// Update the User
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPut]
        public IActionResult Update(User user)
        {
            var result = _userService.Update(user);
            return Ok(result);
        }

        /// <summary>
        /// Delete the User
        /// </summary>
        /// <param name="user"></param>
        [HttpDelete]
        public void Delete(User user)
        {
            _userService.Delete(user);
        }
    }
}
