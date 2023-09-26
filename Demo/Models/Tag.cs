using System.ComponentModel.DataAnnotations;

namespace Demo.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string? Portfolio { get; set; }
        public string? Programs { get; set; }
        public string? Scope { get; set; }
        public string? Location { get; set; }

        [Display(Name = "Agile Adoption")]
        public AgileAdoption AgileAdoption { get; set; }

        [Display(Name = "Team Formation")]
        public TeamFormation TeamFormation { get; set; }

        [Display(Name = "Product Lines")]
        public string? ProductLines { get; set; }

        [Display(Name = "Business Lines")]
        public string? BusinessLines { get; set; }

        [Display(Name = "Startegic Objectives")]
        public string? StartegicObjectives { get; set; }

        [Display(Name = "Value Stream")]
        public string? ValueStream { get; set; }

        [Display(Name = "Delivery Streams")]
        public string? DeliveryStreams { get; set; }

        [Display(Name = "Continuous Improvement")]
        public string? ContinuousImprovement { get; set; }

        [Display(Name = "Participant Group")]
        public string? ParticipantGroup { get; set; }
    }
}
