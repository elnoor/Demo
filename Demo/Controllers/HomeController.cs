using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
	public class HomeController : Controller
	{
		private readonly ApplicationDbContext _dbContext;
		private readonly ILogger<HomeController> _logger;

		public HomeController(ApplicationDbContext dbContext, ILogger<HomeController> logger)
		{
			_dbContext = dbContext;
			_logger = logger;
		}

		public IActionResult Index()
		{
			return View();
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create(Tag tag)
		{
			try
			{
				if (tag.Id == 0 || ModelState.IsValid)
				{
					_dbContext.Tags.Add(tag);
					await _dbContext.SaveChangesAsync();
					return RedirectToAction(nameof(Index));
				}
			}
			catch (Exception e)
			{
				_logger.LogError(e, "Error creating tag");
			}
			return View(tag);
		}
	}
}