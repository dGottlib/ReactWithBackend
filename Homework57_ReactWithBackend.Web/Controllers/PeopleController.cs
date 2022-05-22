using Homework57_ReactWithBackend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homework57_ReactWithBackend.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetAll();
        }


        [Route("add")]
        [HttpPost]
        public void Add(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
        }

        [Route ("update")]
        [HttpPost]
        public void Update(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Update(person);
        }

        [Route ("delete")]
        [HttpPost]
        public void Delete(IdObject obj)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Delete(obj.Id);
        }


    }
}
