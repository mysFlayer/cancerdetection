from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import numpy as np
import tensorflow as tf
from .serializers import FormDataSerializer

model = tf.keras.models.load_model('C:\\Users\\ritiv\\cancer_detection.keras')
@api_view(['POST'])
def submit_form(request):
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            x = np.array([serializer.data['radius_mean'], serializer.data['texture_mean'],
                          serializer.data['perimeter_mean'], serializer.data['area_mean'],
                          serializer.data['smoothness_mean'], serializer.data['compactness_mean'],
                          serializer.data['concavity_mean'], serializer.data['concave_points_mean'],
                          serializer.data['symmetry_mean'], serializer.data['fractal_dimension_mean']])
            x = np.expand_dims(x, axis=0)
            pred = 1 if model.predict(x) > 0.5 else 0
            return Response(pred, status=201)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
