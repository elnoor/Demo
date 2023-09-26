using System.ComponentModel.DataAnnotations;

namespace Demo
{
	public enum AgileAdoption
	{
		[Display(Name = "Agile")]
		Agile,
		[Display(Name = "Non Agile")]
		NonAgile
	}

	public enum TeamFormation
	{
		[Display(Name = "Formed")]
		Formed,
		[Display(Name = "Forming")]
		Forming,
		[Display(Name = "Hot Mess")]
		HotMess,
		[Display(Name = "Not Formed")]
		NotFormed
	}
}
