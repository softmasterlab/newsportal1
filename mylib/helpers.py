def get_user(request):
    if 'user' in request.session:
        user = request.session['user']
    else:
        user = 'Гость'
    data = dict()
    data['user'] = user
    return data
