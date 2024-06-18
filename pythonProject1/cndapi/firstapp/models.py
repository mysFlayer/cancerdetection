from django.db import models

class FormData(models.Model):
    radius_mean = models.FloatField()
    texture_mean = models.FloatField()
    perimeter_mean = models.FloatField()
    area_mean = models.FloatField()
    smoothness_mean = models.FloatField()
    compactness_mean = models.FloatField()
    concavity_mean = models.FloatField()
    concave_points_mean = models.FloatField()
    symmetry_mean = models.FloatField()
    fractal_dimension_mean = models.FloatField()

    def __str__(self):
        return f"Numeric Inputs: {self.radius_mean}, {self.texture_mean}, {self.perimeter_mean}, {self.area_mean}, {self.smoothness_mean}, {self.compactness_mean}, {self.concavity_mean}, {self.concave_points_mean}, {self.symmetry_mean}, {self.fractal_dimension_mean}"
