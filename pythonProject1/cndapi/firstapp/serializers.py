from rest_framework import serializers
from .models import FormData


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = ['radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean', 'smoothness_mean', 'compactness_mean', 'concavity_mean', 'concave_points_mean', 'symmetry_mean', 'fractal_dimension_mean']
